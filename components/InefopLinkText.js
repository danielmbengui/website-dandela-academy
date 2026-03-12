const INEFOP_URL = 'https://www.inefop.gov.ao/'

export default function InefopLinkText({ text, className }) {
  if (typeof text !== 'string' || !text.includes('INEFOP')) {
    return text
  }

  const parts = text.split('INEFOP')

  return (
    <>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`}>
          {part}
          {index < parts.length - 1 && (
            <a
              href={INEFOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
              style={{ color: 'inherit' }}
            >
              INEFOP
            </a>
          )}
        </span>
      ))}
    </>
  )
}
