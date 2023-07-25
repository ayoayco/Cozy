export enum Features {
  "SendToEmail",
  "HideImages",
}

export const featureLabels: Record<Features, string> = {
  [Features.SendToEmail]: "Send to email",
  [Features.HideImages]: "Hide images",
};

export const featureFlags: Record<Features, boolean> = {
  [Features.SendToEmail]: false,
  [Features.HideImages]: true,
};
