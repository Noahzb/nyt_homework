import React from "react";
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
  title,
  author,
  href
}) {
  return (
    <li className="list-group-item">
            <h3>{title}</h3>
            <p>Author {author}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              view book
            </a>
    </li>
  );
}