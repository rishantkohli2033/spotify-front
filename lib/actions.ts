export const getToken = async () =>{
    try {
        var authParameters = {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:  "grant_type=client_credentials&client_id=" + process.env.NEXT_PUBLIC_CLIENT_ID + "&client_secret=" + process.env.NEXT_PUBLIC_CLIENT_SECRET
        }
        const res = await fetch('https://accounts.spotify.com/api/token', authParameters);
        
        if(!res){throw new Error;} 
        const data = await res.json();
        return data.access_token;
    } catch (error:any) {
        console.log(error.message);
    }
}

export const getGenres = async (token:any) =>{
    try {
        const res = await fetch('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
            method: 'GET',
            headers: {
                "Authorization" : "Bearer " + token
            }
        });
        
        if(!res){throw new Error;} 
        const data = await res.json();
        return data.categories.items;
    } catch (error:any) {
        console.log(error.message);
    }
}

export const getPlaylist = async (token:any) =>{
    try {
        const res = await fetch(`https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });
        
        if(!res){throw new Error;} 
        const data = await res.json();
        return data.tracks.items;
    } catch (error:any) {
        console.log(error.message);
    }
}


