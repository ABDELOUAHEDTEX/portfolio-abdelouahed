import { describe, expect, it } from "vitest";

import { content } from "./content";

describe("public project facts", () => {
  it("does not publish the unverified five-minute result", () => {
    const featured = content.fr.projects.items.find(
      (project) => project.slug === "environnements-ephemeres",
    );

    expect(featured?.result).toBeUndefined();
  });

  it("features CityBus first and uses the repository's React front-end", () => {
    expect(content.fr.projects.items[0]?.slug).toBe("citybus");
    const cityBus = content.fr.projects.items.find((project) => project.slug === "citybus");

    expect(cityBus?.stack).toContain("React 18");
    expect(cityBus?.repository).toBe("https://github.com/yousfiwiame/Urban-Transport-System");
    expect(cityBus?.image).toBe("/projects/citybus.png");
  });

  it("includes the provided visuals and repositories for the added projects", () => {
    const frenchProjects = content.fr.projects.items;
    const englishProjects = content.en.projects.items;
    const frenchBySlug = new Map(frenchProjects.map((project) => [project.slug, project]));

    expect(frenchProjects.map((project) => project.slug)).toEqual(
      englishProjects.map((project) => project.slug),
    );
    expect(frenchBySlug.get("environnements-ephemeres")?.image).toBe(
      "/projects/environnements-kubernetes-ephemeres.png",
    );
    expect(frenchBySlug.get("cloudinfragen")?.stack).toContain("FastAPI");
    expect(frenchBySlug.get("smart-copro")).toMatchObject({
      image: "/projects/smart-copro.png",
      repository: "https://github.com/RidaELHAIBA/PFA-PROJECT",
    });
    expect(frenchBySlug.get("plant-disease-detection")).toMatchObject({
      image: "/projects/plant-disease-detection.png",
      repository: "https://github.com/hibaalaoui/pfa-plant-disease-detection",
    });
  });

  it("keeps the AWS credential in the bilingual certifications section", () => {
    expect(content.fr.certifications.verificationUrl).toContain("credly.com/badges/");
    expect(content.en.certifications.credential).toBe(content.fr.certifications.credential);
    expect(content.en.projects.items[0]?.slug).toBe("citybus");
  });
});
