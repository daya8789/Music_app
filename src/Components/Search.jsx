import { useRef } from "react";

export const Search = ({fn}) =>{
    const artist = useRef();
    return (
        <>
            <label htmlFor="">Artist Name</label>
            <input ref={artist} type="text" className="form-control" placeholder="Type Artist Name to Listen His/Her voice"/>
            <button className="btn btn-success" onClick={()=>{
                fn(artist.current.value);
            }}>Search Music</button>
        </>
    );
}