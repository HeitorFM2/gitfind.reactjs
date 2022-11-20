import { ListItem } from "./style"

export default function ItemList({title, description, html_url}) {
  return (
      <ListItem>
        <a href={html_url} target="_blank" rel="noreferrer">
          <strong>{title}</strong>
        </a>
        <p>{description}</p>
        <hr />
      </ListItem>
  )
}