export function FeatureToggle({ isEnabled, featureName }){
    if (isEnabled) {
        return <h3>Feature "{featureName}" is enabled.</h3>;
    } 
    
    return <p>Feature "{featureName}" is disabled.</p>
}