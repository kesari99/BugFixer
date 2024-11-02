import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>
                Create & Resolve
                <br className='max-md:hidden' />
                <span className='orange_gradient text-center'>Your Bug Issues </span>
            </h1>
            <p className='desc  text-center'>
                BugFixer is an open-source  bug creating tool for the modren world to  create and fix bugs
            </p>

            <Feed />
    </section>
  )
}

export default Home