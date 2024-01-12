import React from "react";
import { render } from "@testing-library/react";
import { PeerUser } from "./PeerUser";

describe("<PeerUser />", () => {
  it("renders correctly", () => {
    const { component } = render(<PeerUser />);
    expect(component).toMatchSnapshot();
  });
});
