export interface Resource {
  title: string;
  url: string;
}

export function parseResources(
  text: string
): Resource[] {
  const lines =
    text.split("\n");

  const resources: Resource[] =
    [];

  for (
    let i = 0;
    i < lines.length;
    i++
  ) {
    const line =
      lines[i].trim();

    const nextLine =
      lines[i + 1]?.trim();

    if (
      line.startsWith("•") &&
      nextLine?.startsWith(
        "http"
      )
    ) {
      resources.push({
        title: line.replace(
          "•",
          ""
        ).trim(),
        url: nextLine,
      });
    }
  }

  return resources;
}