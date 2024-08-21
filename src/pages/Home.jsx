import WorkItem from '../components/WorkItem'

const apps = [
  {
    title: 'Weather App',
    description: 'A cool weather application I made that lets you search by city to get the local weather.',
    image: '/images/portfolio_ss.png',
    technologies: 'HTML | CSS | JS | DayJS'
  },
  {
    title: 'Tech Blog',
    description: 'A full stack blog application with authentication.',
    image: '/images/portfolio_ss.png',
    technologies: 'HTML | CSS | JS | DayJS | Express | Postgres | Sequelize | Sessions'
  },
  {
    title: 'Recipe Project App',
    description: 'An application that allows users to store their favorite recipes.',
    image: '/images/portfolio_ss.png',
    technologies: 'HTML | CSS | JS | DayJS | Express | MongoDB | Mongoose | JWT'
  }
]

function Home() {
  // Loop over the apps array and convert each object into a <WorkItem /> component tag
  const workItems = apps.map((workItemObj, index) => {
    return <WorkItem key={index} data={workItemObj} />
  })

  return (
    <>
      <section className="home-hero column align-center">
        <img src="/images/me.jpg" alt="" />

        <h1 className="text-center">Dev and Designer</h1>
      </section>

      <section className="work">
        {workItems}
      </section>
    </>
  )
}

export default Home