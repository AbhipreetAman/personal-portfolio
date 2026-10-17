import { SocialLink } from "@/types";
import {
  FaEnvelope,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaThreads,
  FaInstagram,
  FaFacebook,
  FaMedium,
  FaReddit,
} from "react-icons/fa6";

export const defaultSocialLinks: SocialLink[] = [
  { name: "Email", href: "mailto:abhipreetaman@gmail.com", icon: FaEnvelope, size: 18 },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abhi-aman", icon: FaLinkedin, size: 20 },
  { name: "X (Twitter)", href: "https://x.com/AmanAbhipreet", icon: FaXTwitter, size: 20 },
  { name: "YouTube", href: "https://www.youtube.com/@abhipreetaman", icon: FaYoutube, size: 20 },
  { name: "Threads", href: "https://www.threads.com/@callmeabhipreet", icon: FaThreads, size: 20 },
  { name: "Instagram", href: "https://www.instagram.com/callmeabhipreet/", icon: FaInstagram, size: 20 },
  { name: "Facebook", href: "https://www.facebook.com/abhipreetaman/", icon: FaFacebook, size: 20 },
  { name: "Medium", href: "https://medium.com/@abhipreetaman", icon: FaMedium, size: 20 },
  { name: "Reddit", href: "https://www.reddit.com/user/Zestyclose_Way_4022/", icon: FaReddit, size: 20 },
];

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
}

export default function SocialLinks({
  links = defaultSocialLinks,
  className = "flex flex-wrap items-center gap-5",
}: SocialLinksProps) {
  return (
    <div className={className}>
      {links.map((link) => {
        const Icon = link.icon;
        const isExternal = link.href.startsWith("http");
        return (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.name}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-secondary hover:text-foreground transition-colors"
          >
            <Icon size={link.size || 20} />
          </a>
        );
      })}
    </div>
  );
}
