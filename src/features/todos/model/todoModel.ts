export interface TodoModel {
    _id?: string;
    title?: string;
    userId?: string;
    text?: string;
    date?: string;
    createdAt: string;
    updatedAt: string;
    isComplete?: boolean;
  }