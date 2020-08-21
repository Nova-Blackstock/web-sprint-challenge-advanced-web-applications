import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchApi as mockApi } from './fetchApi'


jest.mock('./fetchApi')

const testData = [
    {
        color: "bisque",
        code: {
          hex: "#dd9a99"
        },
        id: 7
      },
      {
        color: "softyellow",
        code: {
          hex: "#dcdd99"
        },
        id: 8
      }
    ]


test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockApi.mockResolvedValueOnce(testData);
  const { debug, getAllByText } = render(<BubblePage />);

  await waitFor(() =>{
    expect(getAllByText(/bisque/i))
    expect(testData).toHaveLength(2)
  })
  debug()
});
