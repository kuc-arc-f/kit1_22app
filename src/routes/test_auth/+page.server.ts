import { dev } from '$app/environment';
import { error } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import LibConfig from '$lib/LibConfig';
import Session from '$lib/server/ServerSession';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, params }) {
    const key = LibConfig.COOKIE_KEY_SESSION;
    const sid = cookies.get(key);
    console.log("sid=", sid);
    if(!sid) {
      console.error("#sid, nothing");
      throw redirect(303, "/login");
    }
    const obj = await  Session.get(LibConfig.SESSION_KEY_USER, sid);
    //console.log(obj);  
    let validAuth = false;
    if(!obj.id) {
      console.error("Error, nothing obj.id");
      throw redirect(303, "/login");
    }
    validAuth = true;
    if (params) {
      return {
          id: 0, 
          validAuth: validAuth,
      };
    }
    throw error(404, 'Not found');      
}

         
