import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextResources } from '../../Common/GlobalDeclarations';
import JobCard from '../../Components/jobs/JobCard';
import JobPreview from '../../Components/jobs/JobPreview';
import { ScrollView } from 'react-native-gesture-handler';

export default function ContractorTypeJobsBoard({ navigation, route }) {
  let jobType = route.params.jobType;
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`${TextResources.API_ROUTES.HOST}/${TextResources.API_ROUTES.JOBS}/${jobType}`).then(res => res.json()).then(res => {
      console.log('contractor res: ', res)
      if (res) {
        setJobs(res);
      }
    })
  }, [])
  return (
    <ScrollView>
      {jobs?.map(job => <JobPreview key={job.job_id} posterName={job.user.name} jobType={job.job_type} jobImg={"https://www.bls.gov/ooh/images/2880.jpg"} jobLocation={job.location} jobName={job.description}/>)}
      <Text>ContractorTypeJobsBoard</Text>
    </ScrollView>
  )
}