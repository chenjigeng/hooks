/**
 * title: Throttle
 * desc: If options.throttleInterval is set, will enter throttle mode. if run is frequently triggered, the request will be requested with a throttle strategy.
 *
 * title.zh-CN: 节流
 * desc.zh-CN: 通过设置 `throttleInterval` ，则进入节流模式。此时如果频繁触发 `run` ，则会以节流策略进行请求。
 */

import { useRequest } from '@umijs/hooks';
import { Select } from 'antd';
import React from 'react';
import { getEmail } from './service';

const { Option } = Select;

export default () => {
  const { data, loading, run, cancel } = useRequest(getEmail, {
    throttleInterval: 500,
    manual: true
  });

  return (
    <div>
      <p>Enter quickly to see the effect</p>
      <Select
        showSearch
        placeholder="Select Emails"
        filterOption={false}
        onSearch={run}
        onBlur={cancel}
        loading={loading}
        style={{ width: 300 }}
      >
        {data && data.map(i => <Option key={i}>{i}</Option>)}
      </Select>
    </div>
  );
};