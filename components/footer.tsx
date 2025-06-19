import { FC, ReactNode } from "react";

const Footer: FC = (): ReactNode => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-muted-foreground/50 py-2">
      <p className="text-center">&copy; {currentYear} coder-peris. All rights reserved.</p>
    </footer>
  )
}

export default Footer;