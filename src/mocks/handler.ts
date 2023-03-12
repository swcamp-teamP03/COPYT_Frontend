import { copyHandler } from './api/copyHandler';
import { detailCampaignHandler } from './api/detailCampaignHandler';
import { clientHandler } from './api/clientHandler';

export const handler = [...copyHandler, ...detailCampaignHandler, ...clientHandler];
