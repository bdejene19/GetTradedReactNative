import React, { ReactElement, ReactNode } from 'react';
import renderer, { ReactTestRendererJSON, ReactTestRendererTree } from "react-test-renderer"
import EditProfile from '../../../Pages/DrawerScreen/EditProfile';
import MessageThread from '../../messages/MessageThread';



describe("Edit Profile Page", () => {
    it("Should load 4 children - 3 categories and popup modal", () => {
       const tree: ReactTestRendererJSON | ReactTestRendererJSON[] = renderer.create(<MessageThread onPress={() => {}} thread_id={1} from='' fromIcon='' latestMessage='' latestMessageDate={new Date()} onDelete={() => {}}/>).toJSON();
       expect((tree as ReactTestRendererJSON).children.length).toBe(2);
    })

    it("Modal should open when category clicked, and close when X icon clicked.", () => {

    })
})