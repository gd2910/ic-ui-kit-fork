import React, { ReactElement } from "react";
import { IcLoadingIndicator } from "../../components";

export const IndeterminateCircularLoadingIndWithLabel = (): ReactElement => (
  <IcLoadingIndicator label="Loading..."></IcLoadingIndicator>
);

export const DeterminateCircularLoadingIndWithLabel = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <IcLoadingIndicator
    progress={args.progress}
    min={args.min}
    max={args.max}
    label="Loading..."
  ></IcLoadingIndicator>
);

export const IndeterminateCircularLoadingIndSizeSmallDefaultLarge =
  (): ReactElement => (
    <div style={{ display: "grid", gap: "50px" }}>
      <IcLoadingIndicator label="Small" size="small" />
      <IcLoadingIndicator label="Default" />
      <IcLoadingIndicator label="Large" size="large" />
    </div>
  );

export const DeterminateCircularLoadingIndWithLabelSizeSmallDefaultLarge =
  (args: { progress: number; min: number; max: number }): ReactElement => (
    <div style={{ display: "grid", gap: "50px" }}>
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Small"
        size="small"
      />
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Default"
      />
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Large"
        size="large"
      />
    </div>
  );

export const IndeterminateCirclularLoadingIndWithIcon = (): ReactElement => (
  <IcLoadingIndicator size="icon" />
);

export const IndeterminateLinearLoadingIndWithLabel = (): ReactElement => (
  <IcLoadingIndicator label="Loading..." type="linear" />
);

export const DeterminateLinearLoadingIndWithLabel = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <IcLoadingIndicator
    progress={args.progress}
    min={args.min}
    max={args.max}
    label="Loading..."
    type="linear"
  />
);

export const IndeterminateLinearLoadingIndSizeSmallDefaultLargeFull =
  (): ReactElement => (
    <div style={{ display: "grid", gap: "50px" }}>
      <IcLoadingIndicator label="Small" size="small" type="linear" />
      <IcLoadingIndicator label="Default" type="linear" />
      <IcLoadingIndicator label="Large" size="large" type="linear" />
      <IcLoadingIndicator
        label="Full-width"
        size="default"
        type="linear"
        fullWidth={true}
      />
    </div>
  );

export const DeterminateLinearLoadingIndWithLabelSizeSmallDefaultLargeFull =
  (args: { progress: number; min: number; max: number }): ReactElement => (
    <div style={{ display: "grid", gap: "50px" }}>
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Small"
        size="small"
        type="linear"
      />
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Default"
        type="linear"
      />
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Large"
        size="large"
        type="linear"
      />
      <IcLoadingIndicator
        progress={args.progress}
        min={args.min}
        max={args.max}
        label="Full-width"
        size="default"
        type="linear"
        fullWidth={true}
      />
    </div>
  );

export const IndeterminateCircularDarkLoadingIndSizeSmallDefaultLarge =
  (): ReactElement => (
    <div style={{ display: "grid", gap: "50px" }}>
      <IcLoadingIndicator label="Small" size="small" appearance="dark" />
      <IcLoadingIndicator label="Default" appearance="dark" />
      <IcLoadingIndicator label="Large" size="large" appearance="dark" />
    </div>
  );

export const IndeterminateCircularDarkLoadingIndNoLabel = (): ReactElement => (
  <IcLoadingIndicator size="icon" appearance="dark" />
);

export const IndeterminateLinearDarkLoadingIndSizeSmallDefaultLargeFull =
  (): ReactElement => (
    <div style={{ display: "grid", gap: "50px" }}>
      <IcLoadingIndicator label="Default" type="linear" appearance="dark" />
      <IcLoadingIndicator
        label="Large"
        size="large"
        type="linear"
        appearance="dark"
      />
      <IcLoadingIndicator
        label="Full-width"
        type="linear"
        fullWidth={true}
        appearance="dark"
      />
    </div>
  );

export const IndeterminateLoadingIndWithNameNoLabel = (): ReactElement => (
  <div style={{ display: "grid", gap: "50px" }}>
    <IcLoadingIndicator description="Loading" />
    <IcLoadingIndicator description="Loading" type="linear" />
  </div>
);

export const IndeterminateLoadingIndChangingLabel = (): ReactElement => (
  <IcLoadingIndicator
    label="Loading.../Still loading..."
    labelDuration={4000}
  />
);

export const DeterminateCircularLoadingIndWithInnerLabel = (args: {
  progress: number;
  min: number;
  max: number;
}): ReactElement => (
  <IcLoadingIndicator
    size="small"
    inner-label="3"
    progress={args.progress}
    min={args.min}
    max={args.max}
  />
);

export const IndeterminateCircularLoadingIndE2EWithDuration =
  (): ReactElement => (
    <IcLoadingIndicator
      label="First label/Second label/Third label"
      label-duration="2000"
    ></IcLoadingIndicator>
  );

export const IndeterminateCircularLoadingIndE2ENoDuration =
  (): ReactElement => (
    <IcLoadingIndicator label="First label/Second label/Third label"></IcLoadingIndicator>
  );
