import { api } from './index';

export const setRating = (obj: { salon_id: number; rating: number }) => {
  const body = new FormData();
  body.append('salon_id', String(obj.salon_id));
  body.append('rating', String(obj.rating));
  api.mainKy.post('rating', { body });
};
