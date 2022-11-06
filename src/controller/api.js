
const apiGet = (req, res)=>{
    res.json({msg:"Get API"});
}

const apiPost = (req, res)=>{
    res.json({msg:"Post API"});
}

const apiDelete = (req, res)=>{
    res.json({msg:"Delete API"});
}

const apiPut = (req, res)=>{
    res.json({msg:"Put API"});
}


export{apiGet, apiPost, apiDelete, apiPut}