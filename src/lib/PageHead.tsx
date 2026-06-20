import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";

export type MetaTag = {
  charSet?: string;
  name?: string;
  content?: string;
  property?: string;
  title?: string;
};

export type LinkTag = {
  rel: string;
  href: string;
  crossOrigin?: string;
  media?: string;
  type?: string;
};

export function PageHead({
  title,
  meta = [],
  links = [],
  children,
}: {
  title?: string;
  meta?: MetaTag[];
  links?: LinkTag[];
  children?: ReactNode;
}) {
  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {meta.map((tag, index) => {
        if (tag.charSet) {
          return <meta key={index} charSet={tag.charSet} />;
        }
        return tag.name ? (
          <meta key={index} name={tag.name} content={tag.content} />
        ) : (
          <meta key={index} property={tag.property} content={tag.content} />
        );
      })}
      {links.map((link, index) => (
        <link key={index} rel={link.rel} href={link.href} crossOrigin={link.crossOrigin} media={link.media} type={link.type} />
      ))}
      {children}
    </Helmet>
  );
}
