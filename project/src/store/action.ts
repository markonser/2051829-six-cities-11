import { APIRoute } from './../const/const';
import {createAction} from '@reduxjs/toolkit';

export const redirectToRoute = createAction<APIRoute>('site/redirectToRoute');
