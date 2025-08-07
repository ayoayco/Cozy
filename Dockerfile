FROM docker.io/library/node:lts-alpine AS base

# Prepare work directory
WORKDIR /cozy

FROM base AS builder

# Prepare pnpm https://pnpm.io/installation#using-corepack
# workaround for npm registry key change
# ref. `pnpm@10.1.0` / `pnpm@9.15.4` cannot be installed due to key id mismatch · Issue #612 · nodejs/corepack
# - https://github.com/nodejs/corepack/issues/612#issuecomment-2629496091
RUN npm i -g corepack@latest && corepack enable

# Prepare deps
RUN apk update
RUN apk add git --no-cache

# Copy all source files
COPY package.json ./
COPY pnpm-lock.yaml ./

# Run full install
RUN pnpm i --frozen-lockfile --ignore-scripts

# Copy source
COPY . ./

# Build
RUN pnpm build

FROM base AS runner

ARG UID=911
ARG GID=911

# Create a dedicated user and group
RUN set -eux; \
    addgroup -g $GID cozy; \
    adduser -u $UID -D -G cozy cozy;

USER cozy

ENV NODE_ENV=production

COPY --from=builder /cozy/ ./

EXPOSE 4321/tcp

ENV PORT=4321

CMD ["node", "server.mjs"]
