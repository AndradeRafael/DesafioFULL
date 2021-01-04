export class Quota {
    id: number;
    number: number;
    value: number;
    date: Date;
    titleId: number;

    // client only
    delayedDays: number;
}
