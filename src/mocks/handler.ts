import { copyHandler } from './api/copyHandler';
import { detailCampaignHandler } from './api/detailCampaignHandler';

export const handler = [...copyHandler, ...detailCampaignHandler];
