import React from "react"
import { RecoilRoot } from "recoil"
const RecoilRootProvider = ({ element }) => {
  return <RecoilRoot>{element}</RecoilRoot>
}

export default RecoilRootProvider
