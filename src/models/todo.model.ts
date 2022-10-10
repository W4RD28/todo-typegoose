import { prop, getModelForClass } from "@typegoose/typegoose";

export class Todo {
    @prop({ required: true })
    public thing!: string

    @prop({ required: true })
    public day!: string

    @prop({ required: true, default: false })
    public isDone?: boolean
}

export const TodoModel = getModelForClass(Todo)