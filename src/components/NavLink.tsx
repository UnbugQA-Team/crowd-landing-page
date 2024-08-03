import Link from 'next/link'

export function NavLink({
  href,
  children,
  text,
}: {
  href: string
  children: React.ReactNode
  text?: boolean
}) {
  return (
    // hover:bg-slate-100
    <Link
      href={href}
      className={`inline-block rounded-lg px-2 py-1 ${text ? 'text-sm' : 'text-base'} font-semibold text-slate-700 hover:text-slate-900`}
    >
      {children}
    </Link>
  )
}
