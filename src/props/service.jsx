function Service(serviceInfo)
{
    return (
        <>
            <div style={{position: 'relative', margin: '2%', height: '100%', width: '50%', backgroundColor: 'gray', borderRadius: 20}}>
                <h2>{serviceInfo.name}</h2>
                <p>{serviceInfo.description}</p>
                <button style={{marginBottom: '2%'}}>CONTRATAR AHORA</button>
            </div>
        </>
    )
}

export default Service