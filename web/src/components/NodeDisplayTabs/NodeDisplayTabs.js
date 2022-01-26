import { Tab } from '@headlessui/react'
import LinkCard from '../LinkCard/LinkCard'

const NodeDisplayTabs = ({ node }) => {
  return (
    <Tab.Group>
      <Tab.List className="flex flex-row space-x-3 my-2 border-b border-stone-700">
        <Tab
          className={({ selected }) =>
            selected
              ? 'border-stone-700 border-t border-x rounded-t-lg px-3 py-1'
              : 'font-extralight px-3'
          }
        >
          Content
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? 'border-stone-700 border-t border-x rounded-t-lg px-3 py-1'
              : 'font-extralight px-3'
          }
        >
          Incoming
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? 'border-stone-700 border-t border-x rounded-t-lg px-3 py-1'
              : 'font-extralight px-3'
          }
        >
          Outgoing
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-4">
        <Tab.Panel>
          <p>{node.content}</p>
        </Tab.Panel>
        <Tab.Panel>
          <ol>
            <li>
              <LinkCard linkId="Link Name 1" />
            </li>
            <li>
              <LinkCard linkId="Link Name 2" />
            </li>
            <li>
              <LinkCard linkId="Link Name 3" />
            </li>
          </ol>
        </Tab.Panel>
        <Tab.Panel>Some outgoing links</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default NodeDisplayTabs
