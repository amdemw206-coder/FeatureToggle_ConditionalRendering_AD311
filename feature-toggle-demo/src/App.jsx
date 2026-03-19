import { FeatureToggle } from './FeatureToggle'

function App() {
  return (
    <div>
      <h1>Feature List</h1>
      <ul>
        <FeatureToggle isEnabled={true} featureName="Dark Mode" />
        <FeatureToggle isEnabled={true} featureName="Map" />
        <FeatureToggle isEnabled={false} featureName="Light Mode" />
      </ul>
    </div> 
  )
}

export default App
