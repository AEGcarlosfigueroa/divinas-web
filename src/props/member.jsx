function Member(memberInfo)
{
    return (
        <>
            <div style={{position: 'relative', margin: '2%', height: '90%', width: '20%', backgroundColor: 'gray', borderRadius: 20}}>
                <h2>{memberInfo.name}</h2>
                <p>{memberInfo.description}</p>
            </div>
        </>
    )
}

export default Member