import LeafCard from './LeafCard';

const App = () => (
  <div className="flex flex-wrap justify-center items-center h-screen">
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {Array.from({ length: 50 }, (_, i) => <LeafCard key={i} index={i + 1} />)}
    </div>
  </div>
);

export default App;
