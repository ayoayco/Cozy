import { transform } from 'ultrahtml'
import sanitize from 'ultrahtml/transformers/sanitize'

export default function clean(html: string) {

    return transform(html, [
        sanitize({
            dropElements: ['script'],
        })
    ])
}

function set(value: string) {
    return () => value
}