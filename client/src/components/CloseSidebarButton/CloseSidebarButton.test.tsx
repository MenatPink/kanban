import { render, screen } from "@testing-library/react";
import CloseSidebarButton from "./CloseSidebarButton";
import { Provider } from 'react-redux'
import store from '../../store/store';

describe("Close Sidebar Button", () => {
    it("should appear in the document", () => {
        render(
            <Provider store={store}>
                <CloseSidebarButton />
            </Provider>);
        expect(screen.getByTestId("close-sidebar-button")).toBeInTheDocument();
    });
});
