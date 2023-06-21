export const ssr = false;

import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import LibAuth from '$lib/LibAuth';
import LibConfig from '$lib/LibConfig';

//
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    let items = [];
    return {
      items: [],
      id: 0,
    };
}