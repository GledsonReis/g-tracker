import IProject from "./iProject";

export default interface ITask {
    timeInSeconds: number,
    description: string,
    project: IProject
}