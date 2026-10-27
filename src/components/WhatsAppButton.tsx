import { waLink } from '@/lib/whatsapp';

type Props = {
  text: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'light';
  className?: string;
};

export default function WhatsAppButton({ text, children, variant = 'primary', className = '' }: Props) {
  return (
    <a
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-${variant} ${className}`}
    >
      {children}
    </a>
  );
}
