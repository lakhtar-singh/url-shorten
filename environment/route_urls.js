import {env} from './envVariable'

export const urls = {
    'shorten_url'   : env.API_URL+'/shorten-link/',
    'redirect_url'  : env.API_URL+'/redirect-url/',
    'default_list'  : env.API_URL+'/default-list/',
}