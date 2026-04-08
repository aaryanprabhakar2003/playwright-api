import {test as base} from '@playwright/test'
import ApiHelper from '../utils/ApiHelper'
import { Request } from '@playwright/test'
import { expect } from '@playwright/test'


export const test=base.extend<{fix1:ApiHelper}>
({
    fix1:async({request},use)=>{
        const fix1=new ApiHelper(request);
        await use(fix1);

    }
})

export {expect};