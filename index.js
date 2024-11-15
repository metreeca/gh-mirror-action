/*
 * Copyright © 2024 Metreeca srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as core from "@actions/core";
import * as github from "@actions/github";
const token = core.getInput("token", { required: true });
const target = core.getInput("target", { required: true });
const octokit = github.getOctokit(token);
const { repo: { owner, repo }, sha } = github.context;
const ref = `heads/${target}`;
core.notice(`mirroring current branch to ref <${ref}>`);
octokit.rest.git.updateRef({
    owner,
    repo,
    ref,
    sha,
    force: true
}).catch((error) => {
    core.setFailed(`failed to update ref <${ref}>: ${error}`);
});
