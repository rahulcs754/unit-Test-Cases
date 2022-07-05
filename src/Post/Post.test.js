import { screen, render } from "@testing-library/react";
import { Post } from "./Post";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("postlist", (req, res, ctx) => {
    return res(
      ctx.json({
        notelist: [
          {
            id: 0,
            title: "lorem ispem",
            description: "Connect data with power ranger length",
          },
          {
            id: 1,
            title: "Suresh ispem",
            description: "Connect data with power ranger length",
          },
          {
            id: 2,
            title: "dena Power ispem",
            description: "Connect data with power ranger length",
          },
          {
            id: 4,
            title: "Postdata ispem",
            description: "Connect data with power ranger length",
          },
        ],
      })
    );
  })
);

describe("Postlist", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  // Post Component render
  test("WHEN  note list component is mounted THEN render list of notes", () => {
    render(<Post />);
    screen.getAllByTestId("note-list");
  });
});
