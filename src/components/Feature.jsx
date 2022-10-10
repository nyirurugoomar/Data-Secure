import React from 'react'
import {  BookOpenIcon, ChartBarIcon, CodeIcon, ExternalLinkIcon,ShieldCheckIcon, ShieldExclamationIcon } from '@heroicons/react/outline'
import Zoom from 'react-reveal/Zoom';

function About() {
    const features = [
        {
          name: 'Graph-Based Queries',
          description:
            'Catch attackers in your environment faster with more powerful, contextualized dection logic',
              icon: ChartBarIcon,
            
        },
        {
          name: 'Confidence in Alerts',
          description:
            'Express complex attacker behavior as a graph, and unit tests,linters, and static typing to your attack signatures.',
            icon: ShieldCheckIcon,
        },
        {
          name: 'Risk Based',
          description:
            'Grapl leverages a risk based approach instead of a binary black and white alert based approach, alimination the concept of false positives altogether.',
          icon: ShieldExclamationIcon,
        },
        {
          name: 'Pluggable',
          description:
            'Extend Grapl to respresent all of your data using our plugin system.',
          icon: ExternalLinkIcon,
        },
        {
            name: 'Notebook Investigation',
            description:
              'Leverage powerful data science tools like jupyter notebooks for your investigations.',
            icon: BookOpenIcon,
          },
          {
            name: 'Code First Detentions',
            description:
              'Build summary risk profiles using python programming Language to investigate suspicious activity in your environment.',
            icon: CodeIcon,
          },
      ]

  return (

    <div name='feature' className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg text-indigo-600 font-semibold">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight 
           sm:text-4xl sm:tracking-tight">
            Built by security engineers for professional security teams
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p> */}
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <Zoom>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </Zoom>
                </dt>
                <dd className="mt-2 ml-16 text-base text-black-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default About


