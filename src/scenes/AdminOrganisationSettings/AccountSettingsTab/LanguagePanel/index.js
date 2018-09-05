import React from "react"

import ContainerFlex from "base_components/ContainerFlex"

import { Panel, HintText, LanguageLabel, LanguageDropdown } from "../elements"

import { getDropdownValue } from "utils/formFunctions"

const LanguagePanel = ({ language, onChange }) => (
  <Panel title="Language" borderBottom="0" paddingBottom="0">
    <HintText>
      This will change the default language displayed on all menus within your
      organisation.
    </HintText>
    <ContainerFlex isAlignCenter>
      <LanguageLabel>Select Default Language</LanguageLabel>
      <LanguageDropdown
        placeholder="Language"
        name="language"
        onChange={selectedOption =>
          onChange(getDropdownValue(selectedOption), "language")
        }
        options={[
          { label: "English", value: "en" },
          { label: "German", value: "ge" },
          { label: "Russian", value: "ru" }
        ]}
        value={language}
      />
    </ContainerFlex>
  </Panel>
)

export default LanguagePanel
