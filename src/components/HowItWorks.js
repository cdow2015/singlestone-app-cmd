import React from 'react'
import Step from './Step'

function HowItWorks({steps})  {


   //Sort function to sort by stepNumber
    const sort = (step, nextStep) => {
        if(step.stepNumber < nextStep.stepNumber){
            return -1;
        }
        if (step.stepNumber > nextStep.stepNumber){
            return 1;

        }
        else{
            return 0;
        }

    }
    const sortedSteps = steps.sort(sort)

    //Function to only extract the most recent step versions and provide only necessary data
    const extractInfo = (sorted) => {
        let array = []
        //Loop through each step in the sorted array
        sorted.forEach(step => {
            //The default newest/correct version is the first (or only) version in the array
            let correctVersion = step.versionContent[0]
            //If there is more than one version, check each version's effectiveDate to find the most recent
            if(step.versionContent.length > 1){
                let newestVersion = step.versionContent[0].effectiveDate
                step.versionContent.forEach(version => {
                    if(version.effectiveDate > newestVersion){
                        //If more recent version is found, set the newest version date to the version's effective date
                        //and set the correct versionContent to the version
                        newestVersion = version.effectiveDate;
                        correctVersion = version
                        
                    }
                    
                })
                
            }
            //Create new step object with only the necessary and correct fields as extracted above
            let extractedStep = {stepNumber: step.stepNumber, title: correctVersion.title, text: correctVersion.body, id: step.id};
            //Add extracted step to the final Array, with only correct and necessary information
            array.push(extractedStep)
        });
      return array;
      
    }

    const finalSteps = extractInfo(sortedSteps)
    
  return (
     
    <section className="howItWorks">
        <p style={{fontSize: 'medium', fontWeight:'400', margin: '0px'}}>How It Works</p>
        {/* loop through all of the sorted and extracted steps, and create a Step element for each one, with the data that was extracted passed as props */}
        <div className="steps">
            { finalSteps.map(step => {
                return <Step key={step.id} stepNumber={step.stepNumber} title={step.title.toUpperCase()} text={step.text}></Step>
            })}
        </div>
        

    </section>
  )
}

export default HowItWorks;


