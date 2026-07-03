import { create } from "zustand";

interface Conversation {

  _id: string;

  messages: any[];

  createdAt: string;

  sentiment: string;

}

interface Store {

  conversations: Conversation[];

  setConversations: (
    conversations: Conversation[]
  ) => void;

}

export const useConversationStore =
create<Store>((set)=>({

  conversations:[],

  setConversations:(conversations)=>

  set({

    conversations

  })

}));