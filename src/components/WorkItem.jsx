function WorkItem(props) {
  const imageObj = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .4)), url(${props.data.image})`
  }

  return (
    <>
      <article className="work-item" style={imageObj}>
        <h4 className="text-center">{props.data.title}</h4>
        <p>{props.data.description}</p>
        <p className="technologies">{props.data.technologies}</p>
      </article>
    </>
  )
}

export default WorkItem