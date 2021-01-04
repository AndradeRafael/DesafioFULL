import { Obligator } from './Obligator';
import { Quota } from './Quota';

export class Title {
    id: number;
    number: number;
    interest: number;
    fine: number;
    quota: Quota[];
    quotaNumbers: number;
    obligator: Obligator;
    obligatorId: number;
    originalValue: number;

    // client only
    updatedValue: number;
}
