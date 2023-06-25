import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
//import LibConfig from '$lib/LibConfig';
//import Session from '$lib/server/ServerSession';
import Auth from '$lib/server/Auth';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, params }) {
    const result = await Auth.sessionValidate(cookies);
console.log(result);
    if(!result) {
      console.error("error, Auth.sessionValidate");
      throw redirect(303, "/login");
    }
    let validAuth = true;
    if (result) {
      return {
          id: 0, 
          validAuth: validAuth,
      };
    }
    throw error(404, 'Not found');      
}

         
