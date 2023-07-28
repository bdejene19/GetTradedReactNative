import React, { useEffect, useState } from 'react'
import { TextResources } from '../../../Common/GlobalDeclarations';
import JobPreview from '../../../Components/jobs/JobPreview';
import { ScrollView } from 'react-native-gesture-handler';
import { GenStyle } from '../../../Common/GlobalStyles';
import { Input } from '@ui-kitten/components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContractorTypeBoard } from '../../../Common/customHooks';

export default function ContractorTypeJobsBoard({ navigation, route }) {
  let jobType = route.params.jobType;
  const jobs = useContractorTypeBoard(jobType);
  return (
    <ScrollView 
      style={[{height: 350,}, GenStyle.fullWidth]} 
      decelerationRate={0}
      snapToAlignment={"center"}
      snapToInterval={360}
    >
      <Input placeholder={TextResources.FormStrings.SEARCH} accessoryRight={() => <FontAwesomeIcon icon={faSearch}/>}/>
      {jobs?.map(job => <JobPreview key={job.job_id} jobPost_id={job.job_id} posterName={job.user.name} jobType={job.job_type} jobImg={"https://www.bls.gov/ooh/images/2880.jpg"} jobLocation={job.location} jobName={job.description}/>)}
    </ScrollView>
  )
}